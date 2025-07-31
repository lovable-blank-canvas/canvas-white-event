import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
const Registration = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Register Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Secure your spot at this exclusive event
          </p>
        </div>
        
        <Card className="max-w-md mx-auto">
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <Input 
                  placeholder="Full Name" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email Address" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  placeholder="Company (Optional)" 
                  className="w-full"
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Check className="w-4 h-4 mr-2" />
                Complete Registration
              </Button>
              
              <div className="text-center">
                <Badge variant="secondary" className="text-xs">
                  Limited Seats Available
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default Registration;