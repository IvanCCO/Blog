import { Divider } from "@chakra-ui/react";
export function Footer() {
  return (
    <div className="py-5 absolute bottom-0 left-0 right-0 space-y-3">
      <Divider bg={"#2e2"} />
      <p className="text-xs text-white text-center">
        Developed with love by Ivan Miranda ❤️
      </p>
    </div>
  );
}
