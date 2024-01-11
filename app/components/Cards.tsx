/* eslint-disable */
import React from "react";
import { Button } from "@/app/components/ui/button";
import { PiArrowSquareOutThin } from "react-icons/pi";
import {
  Card,
  CardTitle,
  CardLabel,
  CardDescription,
  CardCategory,
} from "@/app/components/ui/long-card";
import Image from "next/image";

const CardComponent = ({
  title,
  description,
  iconSrc,
  iconAlt,
  category,
  onButtonClick,
  buttonLabel,
}) => {
  return (
    <div className="mx-auto w-full max-w-lg bg-[#111111]">
      <Card>
        <Image
          width={800}
          height={800}
          className="h-9 w-10 rounded-lg object-cover"
          src={iconSrc}
          alt={iconAlt}
        />
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>

          <CardCategory>{category}</CardCategory>
        </div>

        <Button variant={"icon"}>
          <CardLabel>{buttonLabel}</CardLabel>
          <PiArrowSquareOutThin />
        </Button>
      </Card>
    </div>
  );
};

export default CardComponent;
