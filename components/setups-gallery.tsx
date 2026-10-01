"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"

import type { Content } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Photo ids map to /images/<id>.webp; captions live in lib/content.ts
const setups: [string, string[]][] = [
  ["weddings", ["20", "17", "21", "18", "22", "19", "10", "03", "05", "02", "04", "16"]],
  ["conference", ["25", "26", "27"]],
  ["classroom", ["23", "24"]],
  ["graduation", ["28"]],
  ["space", ["01", "floorplan"]],
]

export function SetupsGallery({ t, dir }: { t: Content["setups"]; dir: string }) {
  const [open, setOpen] = React.useState<{ ids: string[]; i: number } | null>(null)

  const step = (d: number) => setOpen((o) => o && { ...o, i: (o.i + d + o.ids.length) % o.ids.length })

  const rtl = dir === "rtl"
  const current = open?.ids[open.i]

  return (
    <>
      <Tabs defaultValue="weddings" className="gap-8">
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <TabsList className="mx-auto h-10!">
            {setups.map(([id, ids]) => (
              <TabsTrigger key={id} value={id} className="px-3">
                {t.tabs[id][0]}
                <Badge variant="secondary" className="ms-1">
                  {ids.length}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {setups.map(([id, ids]) => (
          <TabsContent key={id} value={id} className="flex flex-col gap-6">
            <p className="mx-auto max-w-2xl text-center text-base text-muted-foreground">{t.tabs[id][1]}</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {ids.map((p, i) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setOpen({ ids, i })}
                  className={
                    "group relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10 outline-none focus-visible:ring-3 focus-visible:ring-ring/50" +
                    (i === 0 ? " col-span-2 row-span-2" : "")
                  }
                >
                  <Image
                    src={`/images/${p}.webp`}
                    alt={t.alts[p]}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 text-start text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {t.alts[p]}
                  </span>
                </button>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent
          dir={dir}
          showCloseButton={false}
          className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden bg-black p-0 sm:max-w-5xl"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(rtl ? -1 : 1)
            if (e.key === "ArrowLeft") step(rtl ? 1 : -1)
          }}
        >
          {current && (
            <>
              <div className="relative h-[75vh]">
                <Image src={`/images/${current}.webp`} alt={t.alts[current]} fill sizes="90vw" className="object-contain" />
              </div>
              <div className="flex items-center justify-between gap-4 bg-popover p-3">
                <DialogTitle className="text-sm font-normal">{t.alts[current]}</DialogTitle>
                <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                  {open.i + 1} / {open.ids.length}
                  <Button variant="outline" size="icon-sm" onClick={() => step(-1)} aria-label={t.prev}>
                    <ChevronLeftIcon className="rtl:rotate-180" />
                  </Button>
                  <Button variant="outline" size="icon-sm" onClick={() => step(1)} aria-label={t.next}>
                    <ChevronRightIcon className="rtl:rotate-180" />
                  </Button>
                  <DialogClose render={<Button variant="outline" size="icon-sm" aria-label={t.close} />}>
                    <XIcon />
                  </DialogClose>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
