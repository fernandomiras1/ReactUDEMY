import { Navbar, Text, Card, Radio } from "@nextui-org/react";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import Link from "next/link";
export const UINavbar = () => {
  const { asPath } = useRouter();

  const isActiveStyle: CSSProperties = {
    color: "#0070f3",
    textDecoration: "none",
  };

  const defaultStyle: CSSProperties = {
    color: "aliceblue",
    textDecoration: "none",
  };

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Galicia
        </Text>
        <Text
          size={20}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          v.1.0.1
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Link href="/">
          <a style={asPath === "/" ? isActiveStyle : defaultStyle}>Home</a>
        </Link>

        <Link href="/delay">
          <a style={asPath === "/delay" ? isActiveStyle : defaultStyle}>
            useDelay
          </a>
        </Link>

        <Link href="/download-qr">
          <a style={asPath === "/download-qr" ? isActiveStyle : defaultStyle}>
            Download QR
          </a>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
};
