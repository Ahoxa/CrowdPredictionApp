"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useLanguage } from "@/hooks/LanguageContext";

const languages = [
  { value: "en", label: "English" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Español" },
  { value: "it", label: "Italiano" },
  { value: "pt", label: "Português" },
  { value: "ru", label: "Русский" },
  { value: "zh", label: "中文" },
  { value: "ja", label: "日本語" },
  { value: "ko", label: "한국어" },
  { value: "in", label: "Bahasa Indonesia" },
];

function LangSelector() {
  const {language, setLanguage} = useLanguage();

  const handleLanguageChange = (e: string) => {
    setLanguage(e);
  };

  return (
    <div className="flex justify-end mt-2 mr-5 md:text-3xl">
      <div className="inline-block">
        <Select onValueChange={handleLanguageChange} defaultValue={language}>
          <SelectTrigger className="text-md md:text-xl">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default LangSelector;
