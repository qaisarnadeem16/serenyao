import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeader from "@/components/common/SectionHeader";
import EmailDownloadForm from "@/components/pages/campaigns/EmailDownloadForm";
import { Baby, Heart, Users, BookOpen, Headphones, Music, Smartphone, Globe } from "lucide-react";

const campaigns = [
  {
    icon: Baby,
    iconColor: "text-blue-400",
    title: "Coloring 1–4",
    purpose: "Test early childhood engagement segment.",
    description: "Understanding audience behavior and emotional response in the 3–6 age range.",
    includes: "All Auto/Manual ad campaigns for your first four coloring books.",
    focus: "Understanding audience behavior and emotional response in the 3–6 age range.",
  },
  {
    icon: Heart,
    iconColor: "text-pink-400",
    title: "Coloring 4–8",
    purpose: "Establish core sales markets.",
    description: "Main target group — playful imagination, relaxing creativity, and bestselling evergreen niches.",
    includes: "Princess, Animals, and Cozy Cute series.",
    focus: "Main target group — playful imagination, relaxing creativity, and bestselling evergreen niches.",
  },
  {
    icon: Users,
    iconColor: "text-yellow-500",
    title: "Teens & Adults",
    purpose: "Expand into new lifestyle audiences.",
    description: "Reaching older audiences with mindfulness, journaling, and self-care content.",
    includes: "Mindfulness journals, adult coloring books, and meditation guides.",
    focus: "Expanding reach to teens and adults seeking calm and creative expression.",
  },
];

export default function Campaigns() {
  return (
    <>
      <PageHero
        title="Our Publishing Universe"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Campaigns" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-16">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 md:text-h2-tablet mb-6">Explore the Creative & Strategic Campaigns</h2>
            <p className="text-body1 text-text mb-4">
              Discover the creative and strategic campaigns developed across the Serenyao Publishing Universe — from early childhood books to meditative experiences.
            </p>
            <p className="text-body1 text-text">
              Each campaign represents a distinct audience, tone, and emotional world.
            </p>
          </div>

          {/* Publishing System Section */}
          <div className="bg-main-bg rounded-lg p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-h3 md:text-h3-tablet text-center">Your Publishing System — The Goal</h3>
            </div>
            <p className="text-body1 text-text mb-6 text-center max-w-3xl mx-auto">
              We feature and sell all in one calm, creative, professional website that reflects your brand (Serenyao / Pebbel / Calm & Joy).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-purple" />
                </div>
                <h4 className="text-h5 mb-2">Books</h4>
                <p className="text-body2 text-text">Coloring Books & Journals (KDP & direct links)</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Headphones className="w-12 h-12 text-purple" />
                </div>
                <h4 className="text-h5 mb-2">Audiobooks</h4>
                <p className="text-body2 text-text">Your own productions or links to Audible / Spotify</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Music className="w-12 h-12 text-purple" />
                </div>
                <h4 className="text-h5 mb-2">Music</h4>
                <p className="text-body2 text-text">Kids' Music / Meditation Music</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Smartphone className="w-12 h-12 text-purple" />
                </div>
                <h4 className="text-h5 mb-2">App Content</h4>
                <p className="text-body2 text-text">App-related audio & courses</p>
              </div>
            </div>
          </div>

          {/* Campaigns */}
          <div className="flex flex-col gap-12">
            {campaigns.map((campaign, index) => {
              const IconComponent = campaign.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 md:p-12 border border-gray ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex justify-center items-center w-24 h-24 md:w-32 md:h-32">
                      <IconComponent className={`w-20 h-20 md:w-28 md:h-28 ${campaign.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 md:text-h3-tablet mb-4 flex items-center gap-3">
                        <IconComponent className={`w-8 h-8 ${campaign.iconColor}`} />
                        {campaign.title}
                      </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-body2 font-medium text-primary mb-2">Purpose:</p>
                        <p className="text-body1 text-text">{campaign.purpose}</p>
                      </div>
                      <div>
                        <p className="text-body2 font-medium text-primary mb-2">Includes:</p>
                        <p className="text-body1 text-text">{campaign.includes}</p>
                      </div>
                      <div>
                        <p className="text-body2 font-medium text-primary mb-2">Focus:</p>
                        <p className="text-body1 text-text">{campaign.focus}</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="w-24 h-px bg-gray"></div>
            <span className="mx-4 text-text">⸻</span>
            <div className="w-24 h-px bg-gray"></div>
          </div>

          {/* Email Download Section */}
          <div className="bg-main-bg rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-h3 md:text-h3-tablet mb-6 text-center">Get Your Free Extras</h3>
              <p className="text-body1 text-text mb-8 text-center">
                Purchased one of our books? Enter your email below to download exclusive extras, bonus content, and special resources.
              </p>
              <EmailDownloadForm />
            </div>
          </div>

          {/* International Publishing */}
          <div className="bg-white rounded-lg p-8 md:p-12 border border-gray text-center">
            <h3 className="text-h3 md:text-h3-tablet mb-6 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-primary" />
              International Publishing
            </h3>
            <p className="text-body1 text-text mb-4 max-w-3xl mx-auto">
              We publish in the US and German-speaking countries. We're also exploring opportunities to bring our coloring books to Italy — with minimal text, translation is simple and accessible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-6 py-3 bg-accent rounded-full text-primary font-medium">🇺🇸 United States</div>
              <div className="px-6 py-3 bg-accent rounded-full text-primary font-medium">🇩🇪 Germany</div>
              <div className="px-6 py-3 bg-accent rounded-full text-primary font-medium">🇦🇹 Austria</div>
              <div className="px-6 py-3 bg-accent rounded-full text-primary font-medium">🇨🇭 Switzerland</div>
              <div className="px-6 py-3 bg-secondary rounded-full text-primary font-medium">🇮🇹 Italy (Coming Soon)</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

