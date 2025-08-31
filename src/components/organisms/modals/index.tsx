"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageModal({ imageUrl , imageUrl2}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="sm" variant="outline" className="mt-2">
          Ver Planta
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Dialog.Content
          className="
            fixed z-[110]
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[98vw] max-w-4xl sm:w-[90vw] sm:max-w-3xl md:max-w-4xl
            bg-white rounded-xl shadow-lg p-2 sm:p-4
            flex flex-col items-center
            overflow-y-auto max-h-[95vh]
          "
        >
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </Dialog.Close>
          <div className="flex flex-col sm:flex-row gap-2 w-full justify-center items-center">
            <img
              src={imageUrl}
              alt="Imagem"
              className="w-full sm:w-1/2 h-auto max-h-[70vh] object-contain rounded-lg"
            />
            { imageUrl2 &&
              <img
                src={imageUrl2}
                alt="Imagem"
                className="w-full sm:w-1/2 h-auto max-h-[70vh] object-contain rounded-lg"
              />
            }
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
