import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [urgent, setUrgent] = useState(false);

  const sendCallbackEmail = () => {
    if (!fullname.trim()) {
      alert("Παρακαλώ εισάγετε το ονοματεπώνυμό σας.");
      return;
    }
    if (!phone.trim()) {
      alert("Παρακαλώ εισάγετε το τηλέφωνό σας.");
      return;
    }

    const subjectText = urgent
      ? "[ΕΠΕΙΓΟΝ] Αίτημα Callback από Νέος πελατης"
      : "Αίτημα Callback από Νέος πελατις";
    const subject = encodeURIComponent(subjectText);

    const bodyLines = [
      "Ονοματεπώνυμο: " + fullname,
      "Τηλέφωνο: " + phone,
      "Επείγον: " + (urgent ? "Ναι" : "Όχι")
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:marinospalamaris@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Expanded options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in bg-background p-4 rounded-lg shadow-strong border max-w-80">
          <div className="space-y-2">
            <Label htmlFor="fullname-input" className="text-sm font-medium">
              Ονοματεπώνυμο:
            </Label>
            <Input
              id="fullname-input"
              type="text"
              placeholder="π.χ. Γιάννης Παπαδόπουλος"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-input" className="text-sm font-medium">
              Το τηλέφωνό σας (για callback):
            </Label>
            <Input
              id="phone-input"
              type="tel"
              placeholder="+30 69XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="urgent-checkbox"
              checked={urgent}
              onCheckedChange={(checked) => setUrgent(checked === true)}
            />
            <Label htmlFor="urgent-checkbox" className="text-sm font-medium">
              Επείγον αίτημα
            </Label>
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={sendCallbackEmail}
            className="w-full"
          >
            Ζητήστε call back 📧
          </Button>
        </div>
      )}
      
      {/* Main floating button */}
      <Button
        variant="hero"
        size="default"
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full w-12 h-12 md:w-16 md:h-16 shadow-strong hover:shadow-[0_10px_40px_rgba(var(--primary),0.4)] transition-all duration-300 hover:scale-110"
      >
        {isExpanded ? (
          <span className="text-2xl">×</span>
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingContactButton;