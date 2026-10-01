import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CarIcon,
  CoffeeIcon,
  DoorOpenIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  MonitorIcon,
  PhoneIcon,
  PlaneIcon,
  PlugZapIcon,
  RulerIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react"

import { content, type Lang } from "@/lib/content"
import { SetupsGallery } from "@/components/setups-gallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const EMAIL = "Zainab.ElQuaroui@marriott.com"
const PHONES = ["99602084", "99767856"]
const MAP_HREF = "https://maps.google.com/?q=Arraya+Ballroom+Sharq+Kuwait+City"

const navIds = ["events", "setups", "capacity", "facilities", "location"]
const eventImages = [`${BASE}/images/21.webp`, `${BASE}/images/25.webp`, `${BASE}/images/28.webp`, `${BASE}/images/24.webp`]
const facilityIcons = [UsersIcon, MonitorIcon, PlugZapIcon, RulerIcon, CoffeeIcon, CarIcon, TruckIcon, DoorOpenIcon, WrenchIcon]

// From the Arraya floor plan brochure; names come from content.capacity.rooms (same order)
const rooms: [string, number, number, number, number, number, number][] = [
  ["57 × 26", 1482, 2000, 1500, 1950, 800, 248],
  ["32 × 26", 832, 920, 720, 1100, 600, 188],
  ["28 × 26", 728, 820, 650, 840, 540, 140],
  ["28 × 26", 728, 820, 650, 840, 540, 140],
  ["26 × 16", 416, 450, 400, 520, 300, 128],
  ["26 × 16", 416, 450, 400, 520, 300, 128],
  ["26 × 12", 312, 320, 280, 360, 220, 110],
  ["26 × 12", 312, 320, 280, 360, 220, 110],
  ["15 × 12", 180, 170, 160, 220, 140, 68],
  ["15 × 12", 180, 170, 160, 220, 140, 68],
  ["12 × 11", 132, 140, 130, 160, 100, 60],
  ["12 × 11", 132, 140, 130, 160, 100, 60],
]

const formatPhone = (n: string) => `+965 ${n.slice(0, 4)} ${n.slice(4)}`

export function Landing({ lang }: { lang: Lang }) {
  const t = content[lang]
  const enquireHref = `mailto:${EMAIL}?subject=${encodeURIComponent(t.emailSubject)}`

  return (
    <div
      lang={lang}
      dir={t.dir}
      className={
        "min-h-svh bg-background font-sans" +
        (lang === "ar" ? " [--font-heading:var(--font-ar-heading)] [--font-sans:var(--font-ar-sans)]" : "")
      }
    >
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/30 text-white backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <a href="#" className="font-heading text-2xl tracking-wide">
            {t.brand[0]} <span className="text-white/60">{t.brand[1]}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {navIds.map((id, i) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-white">
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              nativeButton={false}
              render={<Link href={t.switchHref} />}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <GlobeIcon data-icon="inline-start" />
              {t.switchLabel}
            </Button>
            <Button size="sm" variant="secondary" nativeButton={false} render={<a href={enquireHref} />}>
              {t.enquire}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-svh items-end overflow-hidden text-white">
        <Image src={`${BASE}/images/20.webp`} alt={t.hero.alt} fill preload sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/40 to-black/20" />
        <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pb-24">
          <Eyebrow className="text-white/70">{t.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-3xl font-heading text-5xl leading-[1.15] sm:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">{t.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#setups" />} className="bg-white text-black hover:bg-white/90">
              {t.hero.primary} <ArrowRightIcon data-icon="inline-end" className="rtl:rotate-180" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href={enquireHref} />}
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              {t.hero.secondary}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 rtl:divide-x-reverse">
          {t.stats.map(([value, label]) => (
            <div key={label} className="px-4 py-10 text-center">
              <div className="font-heading text-4xl sm:text-5xl">{value}</div>
              <div className="mt-1 text-xs tracking-widest text-muted-foreground uppercase rtl:tracking-normal">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <Eyebrow>{t.intro.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl sm:text-5xl">{t.intro.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.intro.p1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.intro.p2}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-3/4 overflow-hidden rounded-xl">
            <Image src={`${BASE}/images/17.webp`} alt={t.intro.alts[0]} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative mt-12 aspect-3/4 overflow-hidden rounded-xl">
            <Image src={`${BASE}/images/26.webp`} alt={t.intro.alts[1]} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-16 bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <Eyebrow>{t.events.eyebrow}</Eyebrow>
            <h2 className="font-heading text-4xl sm:text-5xl">{t.events.title}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.events.items.map(([title, desc], i) => (
              <Card key={title} className="group overflow-hidden pt-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={eventImages[i]}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setups gallery */}
      <section id="setups" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-24 sm:px-6">
        <div className="mb-10 text-center">
          <Eyebrow>{t.setups.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl sm:text-5xl">{t.setups.title}</h2>
        </div>
        <SetupsGallery t={t.setups} dir={t.dir} />
      </section>

      {/* Capacity */}
      <section id="capacity" className="scroll-mt-16 bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>{t.capacity.eyebrow}</Eyebrow>
              <h2 className="font-heading text-4xl sm:text-5xl">{t.capacity.title}</h2>
            </div>
            <p className="text-muted-foreground">{t.capacity.body}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            <Card className="lg:col-span-2">
              <CardContent>
                <div className="relative aspect-[1.4] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={`${BASE}/images/floorplan.webp`}
                    alt={t.capacity.planAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="py-0 lg:col-span-3">
              <Table>
                <TableHeader>
                  <TableRow>
                    {t.capacity.headers.map((h, i) => (
                      <TableHead key={h} className={i > 1 ? "text-end" : "ps-4 text-start"}>
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rooms.map(([size, ...nums], r) => (
                    <TableRow key={r} className={r === 0 ? "font-medium" : ""}>
                      <TableCell className="ps-4">{t.capacity.rooms[r]}</TableCell>
                      <TableCell className="text-muted-foreground" dir="ltr">
                        {size}
                      </TableCell>
                      {nums.map((n, i) => (
                        <TableCell key={i} className="text-end tabular-nums">
                          {n.toLocaleString("en")}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-24 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{t.facilities.eyebrow}</Eyebrow>
          <h2 className="font-heading text-4xl sm:text-5xl">{t.facilities.title}</h2>
        </div>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.facilities.items.map(([title, desc], i) => {
            const Icon = facilityIcons[i]
            return (
              <div key={title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Location + CTA */}
      <section id="location" className="relative isolate scroll-mt-16 overflow-hidden text-white">
        <Image src={`${BASE}/images/27.webp`} alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/75" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="text-white/60">{t.contact.eyebrow}</Eyebrow>
            <h2 className="font-heading text-4xl sm:text-5xl">{t.contact.title}</h2>
            <p className="mt-6 max-w-lg text-white/75">{t.contact.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href={enquireHref} />} className="bg-white text-black hover:bg-white/90">
                {t.contact.primary} <ArrowRightIcon data-icon="inline-end" className="rtl:rotate-180" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href={MAP_HREF} target="_blank" rel="noreferrer" />}
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <MapPinIcon data-icon="inline-start" /> {t.contact.directions}
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-2">
            <div>
              <MapPinIcon className="mb-3 size-5 text-white/60" />
              <h3 className="font-medium">{t.contact.venue}</h3>
              <p className="mt-1 text-sm text-white/70">
                {t.contact.address[0]}
                <br />
                {t.contact.address[1]}
              </p>
            </div>
            <div>
              <PlaneIcon className="mb-3 size-5 text-white/60 rtl:-scale-x-100" />
              <h3 className="font-medium">{t.contact.airportTitle}</h3>
              <p className="mt-1 text-sm text-white/70">{t.contact.airport}</p>
            </div>
            <div>
              <PhoneIcon className="mb-3 size-5 text-white/60" />
              <h3 className="font-medium">{t.contact.call}</h3>
              <p className="mt-1 flex flex-col items-start text-sm text-white/70">
                {PHONES.map((n) => (
                  <a key={n} href={`tel:+965${n}`} dir="ltr" className="hover:text-white">
                    {formatPhone(n)}
                  </a>
                ))}
              </p>
            </div>
            <div className="min-w-0">
              <MailIcon className="mb-3 size-5 text-white/60" />
              <h3 className="font-medium">{t.contact.email}</h3>
              <a href={enquireHref} dir="ltr" className="mt-1 block text-sm break-all text-white/70 hover:text-white">
                {EMAIL}
              </a>
            </div>
            <Separator className="bg-white/15 sm:col-span-2" />
            <p className="text-sm text-white/70 sm:col-span-2">{t.contact.hotel}</p>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <span>
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
          <span>
            {t.footer.enquiries}:{" "}
            <bdi dir="ltr">
              {PHONES.join(" · ")} · {EMAIL}
            </bdi>
          </span>
        </div>
      </footer>
    </div>
  )
}

function Eyebrow({ children, className = "text-muted-foreground" }: { children: React.ReactNode; className?: string }) {
  return <p className={"mb-3 text-xs tracking-[0.3em] uppercase rtl:text-sm rtl:tracking-normal " + className}>{children}</p>
}
