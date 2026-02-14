import Image from "next/image";
import { Button } from "@/components/ui/button";  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <main className="min-h-screen p10">
        return  <h1 className="text-4xl font-bold text-blue-600">
        Tailwind v4 is working
      </h1>

      <Card className="max-w-md">
        <CardHeader>
        <CardTitle>Local Setup ✅</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          You have successfully installed the design system and are ready to start building your project.
        </p>
        <Button>Test Button</Button>
        </CardContent>
      </Card>
    </main>
  );
}
