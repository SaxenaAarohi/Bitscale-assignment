import type { FilterField, ResultColumn } from "@/types";

export const findPeopleFilters: FilterField[] = [
  {
    id: "keyword",
    label: "People Keyword",
    placeholder: "Enter single keyword here...",
    icon: "keyword",
    variant: "input",
  },
  {
    id: "jobTitle",
    label: "Job Title",
    placeholder: "E.g: Manager, Software Engineer",
    icon: "title",
    variant: "select",
    options: ["Manager", "Software Engineer", "Founder", "Sales Lead", "Marketing Head"],
  },
  {
    id: "website",
    label: "Company Website",
    placeholder: "Eg: Google.com, LinkedIn.com",
    icon: "website",
    variant: "select",
    options: ["Google.com", "LinkedIn.com", "Microsoft.com", "Amazon.com"],
  },
  {
    id: "personLocation",
    label: "Person Location",
    placeholder: "Eg: London, Great New York City",
    icon: "location",
    variant: "select",
    options: ["London", "New York City", "San Francisco", "Berlin", "Bangalore"],
  },
  {
    id: "companyLocation",
    label: "Company Location",
    placeholder: "Eg: United States, UAE",
    icon: "location",
    variant: "select",
    options: ["United States", "UAE", "United Kingdom", "India", "Germany"],
  },
  {
    id: "headcount",
    label: "Company Headcount",
    placeholder: "E.g: 11-50 , 10000+",
    icon: "headcount",
    variant: "select",
    options: ["1-10", "11-50", "51-200", "201-1000", "1001-5000", "10000+"],
  },
  {
    id: "managementLevel",
    label: "Management Level",
    placeholder: "E.g: Owner, Founder",
    icon: "level",
    variant: "select",
    options: ["Owner", "Founder", "C-Level", "VP", "Director", "Manager"],
  },
];

export const resultColumns: ResultColumn[] = [
  { id: "name", label: "NAME" },
  { id: "title", label: "TITLE" },
  { id: "headline", label: "HEADLINE" },
  { id: "linkedin", label: "LINKEDIN URL" },
  { id: "company", label: "COMPANY" },
  { id: "companyUrl", label: "COMPANY URL" },
  { id: "companySize", label: "COMPANY SIZE" },
];
