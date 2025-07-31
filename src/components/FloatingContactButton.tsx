import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [phone, setPhone] = useState("");

  const sendCallbackEmail = () => {
    if (!phone.trim()) {
      alert("Παρακαλώ εισάγετε το τηλέφωνό σας.");
      return;
    }
    const subject = encodeURIComponent("Αίτημα Callback από LOVABLE.dev");
    const body = encodeURIComponent("Παρακαλώ καλέστε με στο τηλέφωνο: " + phone);
    window.location.href = `mailto:michalislokoshs@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Expanded options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in bg-background p-4 rounded-lg shadow-strong border max-w-80">
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
          <Button
            variant="default"
            size="sm"
            onClick={sendCallbackEmail}
            className="w-full"
          >
            Ζητήστε call back 📧
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              window.open("sms:+3069768466526?body=Χρειάζομαι%20τεχνική%20υποστήριξη.%20Παρακαλώ%20καλέστε%20με%20το%20συντομότερο.");
              setIsExpanded(false);
            }}
            className="w-full"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Στείλτε SMS και θα σας καλέσουμε 📞
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