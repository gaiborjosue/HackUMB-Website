import React, { useRef } from 'react';
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import { JSX } from 'react/jsx-runtime';
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

interface BadgeTemplateProps {
  userId: string;
  userName: string;
  templateSrc: string;
}

const BadgeTemplate: React.FC<BadgeTemplateProps> = ({ userId, userName, templateSrc }) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const downloadBadge = async () => {

    // Create a main canvas for the final badge
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      toast.error('Failed to create canvas context for badge! 😢');
      return;
    }

    // Load the template image
    const img = new Image();
    img.src = templateSrc;
    img.crossOrigin = 'anonymous';
    img.onload = async () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Generate the QR code
      if (qrCodeRef.current) {
        html2canvas(qrCodeRef.current).then(qrCanvas => {
          ctx.drawImage(qrCanvas, 505, 200, 200, 200); // Adjust position as needed

          // Add the user name text
          ctx.font = '28px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText(userName, 40, 420); // Adjust position as needed

          // Convert the canvas to a data URL
          const dataURL = canvas.toDataURL('image/png');

          // Create a download link and trigger the download
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = `${userName}_badge.png`;
          link.click();
        });
      }
    };

    toast.success("Badge downloaded successfully! Don't forget to bring it to the event! 🎉");
  };

  const handleShareOnLinkedIn = async () => {
      // Redirect to LinkedIn share URL
      const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        "https://hackumb.tech/badge"
      )}&title=${encodeURIComponent(
        'Check out my badge for the Hackathon!'
      )}&summary=${encodeURIComponent(
        'I just generated my badge for the Hackathon. Check it out!'
      )}&source=${encodeURIComponent('https://hackumb.tech/badge')}`;
      window.open(linkedInShareUrl, '_blank');
    
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-2">
      {/* Hidden QR Code Element */}
      <div ref={qrCodeRef} style={{ position: 'absolute', top: '-1000px', left: '-1000px' }}>
        <QRCode value={`https://hackumb.tech/checkin/${userId}`} size={300} />
      </div>
      <Button onClick={downloadBadge} className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download Pass
      </Button>

      <Button onClick={handleShareOnLinkedIn} className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        <LinkedinIcon className="mr-2 h-4 w-4" />
        Share on LinkedIn
      </Button>
    </div>
  );
};

function DownloadIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default BadgeTemplate;
