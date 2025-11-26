import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface LocationsSectionProps {
  badge: string;
  title: string;
  locations: Location[];
  mapEmbedUrl?: string;
  className?: string;
}

export default function LocationsSection({
  badge,
  title,
  locations,
  mapEmbedUrl,
  className = "",
}: LocationsSectionProps) {
  return (
    <section className={` ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="text-start mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>
          <h2 className="text-h2 md:text-h2-tablet text-primary max-w-5xl">{title}</h2>
        </div>

        {/* Locations List */}
        <div className="flex jutsify-between items-center gap-12 mb-12">
          {locations.map((location) => (
            <div key={location.id} className="border-l-[3px] border-purple pl-6">
              <h3 className="text-h5 md:text-h5-tablet text-primary mb-3 font-bold">
                {location.name}
              </h3>
              <p className="text-body2 text-text mb-2">
                <span className="font-medium text-primary">Address:</span> {location.address}
              </p>
              <p className="text-body2 text-text">
                <span className="font-medium text-primary">Phone:</span> {location.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map - Full Width */}
      {mapEmbedUrl && (
        <div className="w-full h-[500px]">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </section>
  );
}

