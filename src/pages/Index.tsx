import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'Парикмахерские услуги',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=400&fit=crop',
      description: 'Стрижки, окрашивание, укладки'
    },
    {
      title: 'Маникюр',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop',
      description: 'Классический и аппаратный маникюр'
    },
    {
      title: 'Педикюр',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&h=400&fit=crop',
      description: 'Уход за ногами и стопами'
    },
    {
      title: 'Косметология',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=400&fit=crop',
      description: 'Процедуры для лица и тела'
    },
    {
      title: 'Эстетист по телу',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=400&fit=crop',
      description: 'Массажи и SPA-процедуры'
    },
    {
      title: 'Визаж',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=400&fit=crop',
      description: 'Профессиональный макияж'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <Icon name="Quote" size={64} className="mx-auto mb-8 text-amber-500 opacity-80" />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae armet. 
              Ipsum, pharetra donec ornare velit. Id et quisque accumsan risus ac ipsum ut. Sit 
              elit. Facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque 
              quam tortor, malesuada iaculis.
            </p>
            
            <p className="text-lg leading-relaxed font-light">
              Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra 
              rutrum. Eames ultrices condimentum tortor nec pretibus. Velit imperdiet 
              sapien fringilla vestibulum sit fames.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-neutral-800/50 border-neutral-700 hover:border-amber-500/50 transition-all duration-300 hover-scale cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-cormorant font-semibold mb-2 text-amber-50">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Icon name="Sparkles" size={32} className="mx-auto text-amber-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;