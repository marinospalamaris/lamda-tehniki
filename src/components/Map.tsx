
import React from 'react';

const Map = () => {
  const serviceAreas = [
    { 
      name: 'Πειραιάς', 
      isMain: true,
      description: 'Κεντρικό γραφείο - Άμεση εξυπηρέτηση'
    },
    { 
      name: 'Νίκαια', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Κερατσίνι', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Δραπετσώνα', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Καλλιθέα', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Μοσχάτο', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Κορυδαλλός', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Πέραμα', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Νέο Φάληρο', 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    }
  ];

  return (
    <div className="relative w-full h-[400px]">
      <img 
        src="/lovable-uploads/f5fc211e-a39e-4bcd-a47c-e5225fa56392.png"
        alt="Χάρτης Περιοχών Εξυπηρέτησης Lamda Tehniki"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
        <h4 className="font-semibold text-primary mb-2">Περιοχές Εξυπηρέτησης</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Κεντρικό Γραφείο - Πειραιάς</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/70"></div>
            <span>Περιοχές Εξυπηρέτησης</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t">
          <p className="text-xs font-medium text-primary">📞 Κλήση τώρα:</p>
          <a href="tel:6976846526" className="text-sm font-bold text-primary hover:underline">
            6976846526
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
        <h5 className="font-semibold text-primary text-sm mb-2">Εξυπηρετούμε</h5>
        <div className="grid grid-cols-2 gap-1 text-xs">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${area.isMain ? 'bg-primary' : 'bg-primary/70'}`}></div>
              <span className="text-muted-foreground">{area.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
