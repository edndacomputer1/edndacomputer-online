import React from "react";
import { Button } from "@/app/components/ui/button";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardCategory,
} from "@/app/components/ui/long-card";
import { BsFileText } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="mx-auto h-screen w-full max-w-lg bg-[#111111]">
      <Card>
        <BsFileText className="h-10 w-10" />
        <CardContent>
          <CardTitle>Rrésumé</CardTitle>
          <CardDescription>
            A high quality Framer portfolio template <br /> designed for
            creatives.
          </CardDescription>

          <CardCategory>Store</CardCategory>
        </CardContent>
        <Button className="gap-x-2 bg-neutral-800 font-Intermedium text-white">
          View
          <HiArrowTopRightOnSquare />
        </Button>
      </Card>
    </div>
  );
};

export default Cards;
