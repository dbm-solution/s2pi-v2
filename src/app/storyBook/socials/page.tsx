"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cards/card";
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button";
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon";
import { LinkedInIcon } from "@/components/ui/icons/socials/LinkedIn-icon";
import { TwitterIcon } from "@/components/ui/icons/socials/Twitter-icon";
import { EmailIcon } from "@/components/ui/icons/socials/Email-icon";

const variants = [
  { variant: "facebook", label: "Facebook", icon: <FacebookIcon /> },
  { variant: "linkedin", label: "LinkedIn", icon: <LinkedInIcon /> },
  { variant: "twitter", label: "Twitter", icon: <TwitterIcon /> },
  { variant: "email", label: "Email", icon: <EmailIcon /> },
  { variant: "custom", label: "Custom", icon: <span>⭐</span> },
];
const sizes = ["sm", "md", "lg"];
const shapes = ["rectangle", "rounded", "pill"];

export default function SocialsStoryBook() {
  return (
    <div>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>SocialButton Storybook</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Variants & Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: 8 }}>Variant</th>
                {sizes.map((size) => (
                  <th key={size} style={{ textAlign: "center", padding: 8 }}>{size.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map(({ variant, label, icon }) => (
                <tr key={variant}>
                  <td style={{ padding: 8 }}>{label}</td>
                  {sizes.map((size) => (
                    <td key={size} style={{ textAlign: "center", padding: 8 }}>
                      <SocialButton
                        variant={variant as any}
                        size={size as any}
                        icon={icon}
                        href="#"
                        style={{ margin: 4 }}
                      >
                        {label}
                      </SocialButton>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>All Shapes</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {shapes.map((shape) => (
              <SocialButton
                key={shape}
                variant="facebook"
                size="md"
                shape={shape as any}
                icon={<FacebookIcon />}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </SocialButton>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}