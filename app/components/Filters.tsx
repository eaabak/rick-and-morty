"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFilterStore } from "../stores/useFilterStore";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status, gender, setStatus, setGender, setPage } = useFilterStore();

  const handleFilterChange = (type: "status" | "gender", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    params.delete("page");
    router.push(`/?${params.toString()}`);

    if (type === "status") setStatus(value);
    else setGender(value);
    setPage(1);
  };

  return (
    <Card className="p-4 shadow-md border border-gray-200 rounded-lg flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex flex-col w-full sm:w-[180px]">
        <Label htmlFor="status">Durum</Label>
        <Select value={status} onValueChange={(value) => handleFilterChange("status", value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Seçiniz" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alive">Yaşıyor</SelectItem>
            <SelectItem value="dead">Ölü</SelectItem>
            <SelectItem value="unknown">Bilinmiyor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col w-full sm:w-[180px]">
        <Label htmlFor="gender">Cinsiyet</Label>
        <Select value={gender} onValueChange={(value) => handleFilterChange("gender", value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Seçiniz" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Erkek</SelectItem>
            <SelectItem value="female">Kadın</SelectItem>
            <SelectItem value="genderless">Cinsiyetsiz</SelectItem>
            <SelectItem value="unknown">Bilinmiyor</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}
