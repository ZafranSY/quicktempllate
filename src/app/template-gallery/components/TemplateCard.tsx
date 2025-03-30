import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

type TemplateCardProps = {
  title: string;
  count: number;
  icon: React.ReactNode;
  imageSrc: string;
  buttonText: string;
};

export default function TemplateCard({ title, count, icon, imageSrc, buttonText }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src={imageSrc}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
          alt={`${title} template preview`}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="font-medium text-sm">{title}</p>
          <p className="text-xs text-muted-foreground">{count} templates</p>
        </div>
      </div>
      <CardFooter className="p-2">
        <Button variant="ghost" size="sm" className="w-full gap-1">
          {icon}
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}