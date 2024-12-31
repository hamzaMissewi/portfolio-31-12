import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ItemsCarousal<T = Record<string, any>>({
  items,
  // Item,
}: {
  items: T[];
  Item?: ({ item }: { item: T }) => React.JSX.Element;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {/*{Array.from({ length: 5 }).map((_, index) => (*/}
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  {/*<div>*/}
                  {/*  <Item item={item} />*/}
                  {/*</div>*/}
                  <span className="text-3xl font-semibold">{index + 1}</span>

                  <p className="text-lg text-center md:text-left font-semibold bg-white text-black decoration-[#F7AB0A]/50">
                    {index + 1}/{items.length} -{" "}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ItemsCarousal;
