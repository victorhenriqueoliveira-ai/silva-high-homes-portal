"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageModal({ imageUrl }) {
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
            fixed z-50
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[90%] max-w-4xl
            bg-white rounded-xl shadow-lg p-4
            flex flex-col items-center
          "
        >
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </Dialog.Close>
          <img
            src={imageUrl}
            alt="Imagem"
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
