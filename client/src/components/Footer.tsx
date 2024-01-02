import { Divider } from "@chakra-ui/react";

interface FooterProps {
  textColor: string;
}

export function Footer({ textColor }: FooterProps) {
  const color = `text-${textColor}`;

  return (
    <div className="py-5 absolute bottom-0 left-0 right-0 space-y-3">
      <Divider />
      <p className={`text-xs  ${color} text-center`}>
        Developed with love by Ivan Miranda ❤️
      </p>
    </div>
  );
}
