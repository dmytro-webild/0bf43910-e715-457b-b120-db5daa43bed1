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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Exit 201 Truck Repair LLC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Quality Truck Repair at Exit 201"
      description="Providing reliable maintenance and repair services for commercial trucking fleets. Fast, professional, and built to keep you on the road."
      buttons={[
        {
          text: "Call Now",
          href: "tel:2192039000",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automotive-parts-background_645730-282.jpg",
          imageAlt: "Truck repair shop facility",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg",
          imageAlt: "Professional repair service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/worker-uniform-man-repairs-truck-man-with-tools_1157-46529.jpg",
          imageAlt: "Experienced team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-mechanic-checking-truck_23-2149426542.jpg",
          imageAlt: "Quality maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-tools-truck-worker-uniform-faulty-truck_1157-46522.jpg",
          imageAlt: "Exit 201 repair bay",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/brutal-tattooed-bearded-mechanic-specialist-repairs-car-engine-which-is-raised-hydraulic-lift-garage-service-station_613910-19599.jpg",
          imageAlt: "On-road service",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Your Trusted Remington Repair Team"
      description={[
        "Exit 201 Truck Repair LLC is located conveniently at 3273 US Highway 24, Remington, IN. We specialize in heavy-duty commercial truck maintenance to minimize downtime.",
        "Our expert technicians are dedicated to quality workmanship, ensuring your vehicle remains safe and fully functional for every mile ahead.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "s1",
          title: "Engine & Drivetrain",
          description: "Expert diagnostics and repairs to keep your truck engine performing at its peak capacity.",
          tag: "Essential",
          imageSrc: "http://img.b2bpic.net/free-vector/car-service-isometric-isolated-icon-set_1284-12060.jpg",
        },
        {
          id: "s2",
          title: "Fleet Maintenance",
          description: "Preventive maintenance schedules tailored to keep your entire fleet operating efficiently.",
          tag: "Reliable",
          imageSrc: "http://img.b2bpic.net/free-vector/shipping-logistics-illustration_24908-61548.jpg",
        },
        {
          id: "s3",
          title: "Brakes & Tires",
          description: "Safety-first repair services for braking systems and tire wear to protect your driver and load.",
          tag: "Safety",
          imageSrc: "http://img.b2bpic.net/free-photo/young-worker-car-workshop_52683-90905.jpg",
        },
      ]}
      title="Comprehensive Repair Services"
      description="We offer a wide range of services to handle all your heavy-duty maintenance needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "Mon-Sat",
          description: "8:00am - 7:00pm",
        },
        {
          id: "m2",
          value: "Sunday",
          description: "9:00am - 5:00pm",
        },
        {
          id: "m3",
          value: "Service",
          description: "Full-Service Heavy Duty Repair",
        },
      ]}
      title="Our Commitment"
      description="We stand by our hours and our quality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "John Doe",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-truck-driver_23-2151489873.jpg",
        },
        {
          id: "t2",
          name: "Mike Smith",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-warehouse_23-2148886831.jpg",
        },
        {
          id: "t3",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-female-driver-with-van-wagon-car_23-2150248834.jpg",
        },
        {
          id: "t4",
          name: "Robert Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-successful-middle-aged-manager-businessman-holding-tablet-computer-large-warehouse-organizing-distribution_342744-1494.jpg",
        },
        {
          id: "t5",
          name: "Chris Taylor",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-gas-station-with-her-car_23-2148958857.jpg",
        },
      ]}
      cardTitle="What Drivers Say"
      cardTag="Trusted Service"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer emergency roadside assistance?",
          content: "Please contact us at 219-203-9000 for current availability regarding on-road assistance.",
        },
        {
          id: "f2",
          title: "Are you open on weekends?",
          content: "Yes, we are open Monday through Saturday until 7pm, and Sunday from 9am to 5pm.",
        },
        {
          id: "f3",
          title: "Where are you located?",
          content: "We are at 3273 US Highway 24, Remington, IN 47977.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries about our truck repair services in Remington."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Need repairs? Give us a call or send us an email today."
      buttons={[
        {
          text: "219-203-9000",
          href: "tel:2192039000",
        },
        {
          text: "Email Us",
          href: "mailto:exit201repair@gmail.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "3273 US Highway 24, Remington, IN 47977",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "219-203-9000",
              href: "tel:2192039000",
            },
            {
              label: "exit201repair@gmail.com",
              href: "mailto:exit201repair@gmail.com",
            },
          ],
        },
        {
          title: "Hours",
          items: [
            {
              label: "Mon-Sat: 8am-7pm",
              href: "#",
            },
            {
              label: "Sun: 9am-5pm",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Exit 201 Truck Repair LLC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
