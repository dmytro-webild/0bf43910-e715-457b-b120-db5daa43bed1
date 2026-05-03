"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Exit 201 Truck Repair LLC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "gradient-bars" }}
      title="Quality Truck Repair at Exit 201"
      description="Professional heavy-duty repair services at 3273 US Highway 24, Remington, IN. We're here to keep your fleet running smoothly."
      buttons={[{ text: "Call 219-203-9000", href: "tel:2192039000" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automotive-parts-background_645730-282.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      title="About Exit 201 Truck Repair"
      description={[
        "Exit 201 Truck Repair LLC is your premier partner for heavy-duty truck maintenance in Remington, IN. Located at 3273 US Highway 24, we are committed to getting you back on the road safely.",        "Our expert team brings years of experience to every repair, ensuring high-quality, professional, and timely service for all commercial trucks."
      ]}
      useInvertedBackground={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      title="Comprehensive Repair Services"
      description="We handle everything from diagnostics to major mechanical repairs."
      useInvertedBackground={false}
      features={[
        { id: "s1", title: "Engine & Drivetrain", description: "Advanced engine diagnostics and repairs to restore peak power and efficiency.", tag: "Engine" },
        { id: "s2", title: "Preventive Maintenance", description: "Routine checks and servicing to minimize downtime and prevent costly roadside breakdowns.", tag: "Maintenance" },
        { id: "s3", title: "Brakes & Tires", description: "Expert braking and tire replacement services to keep your haul safe and compliant.", tag: "Safety" }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      title="Our Business Hours"
      description="Convenient hours for our hard-working drivers."
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "Mon-Sat", description: "8:00am - 7:00pm" },
        { id: "m2", value: "Sunday", description: "9:00am - 5:00pm" },
        { id: "m3", value: "Contact", description: "219-203-9000" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      cardTitle="Trusted by Drivers"
      cardTag="4.9 Star Average Rating"
      cardAnimation="slide-up"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Fleet Manager", imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-truck-driver_23-2151489873.jpg" },
        { id: "t2", name: "Local Driver", imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-warehouse_23-2148886831.jpg" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      title="Frequently Asked Questions"
      description="Got questions about our services? We have the answers."
      textboxLayout="default"
      faqsAnimation="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Where is your shop?", content: "3273 US Highway 24, Remington IN 47977" },
        { id: "f2", title: "How can I reach you?", content: "Call us at 219-203-9000 or email exit201repair@gmail.com" }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Contact Exit 201 Truck Repair today for professional assistance."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
      buttons={[
        { text: "Call 219-203-9000", href: "tel:2192039000" },
        { text: "Email exit201repair@gmail.com", href: "mailto:exit201repair@gmail.com" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="Exit 201 Truck Repair LLC"
      columns={[
        { title: "Location", items: [{ label: "3273 US Highway 24, Remington IN", href: "#" }] },
        { title: "Contact", items: [{ label: "219-203-9000", href: "tel:2192039000" }, { label: "exit201repair@gmail.com", href: "mailto:exit201repair@gmail.com" }] },
        { title: "Hours", items: [{ label: "Mon-Sat: 8am-7pm", href: "#" }, { label: "Sun: 9am-5pm", href: "#" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
