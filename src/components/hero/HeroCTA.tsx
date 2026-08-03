import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

type HeroCTAProps = {
  className?: string;
};

export function HeroCTA({ className = "" }: HeroCTAProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`.trim()}>
      <PrimaryButton href="/programs">Explore Programs</PrimaryButton>
      <SecondaryButton href="/instructor">Become an Instructor</SecondaryButton>
    </div>
  );
}
