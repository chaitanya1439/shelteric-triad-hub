
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavbar from '@/components/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, CreditCard, ShieldCheck } from 'lucide-react';

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Luxury Suite Hotel",
      type: "Stay",
      details: "1 room × 2 nights",
      price: 298,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      quantity: 1
    },
    {
      id: 2,
      name: "Pizza Delivery",
      type: "Food",
      details: "Margherita Pizza",
      price: 15,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      quantity: 2
    },
    {
      id: 3,
      name: "Standard Cab",
      type: "Travel",
      details: "Airport to Downtown",
      price: 25,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      quantity: 1
    }
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxes = subtotal * 0.08; // 8% tax
  const total = subtotal + taxes;
  
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Cart Items ({cartItems.length})</h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id}>
                          <div className="flex flex-col sm:flex-row items-center">
                            <div className="sm:w-1/4 w-full mb-4 sm:mb-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-36 object-cover rounded-md"
                              />
                            </div>
                            <div className="sm:w-3/4 w-full sm:ml-6">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold">{item.name}</h3>
                                  <p className="text-gray-600 text-sm">{item.type}</p>
                                  <p className="text-gray-600 text-sm">{item.details}</p>
                                </div>
                                <span className="font-bold">${item.price * item.quantity}</span>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center">
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                  >
                                    <Minus size={16} />
                                  </Button>
                                  <span className="mx-3">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                  >
                                    <Plus size={16} />
                                  </Button>
                                </div>
                                <Button variant="ghost" size="sm" className="text-red-600 flex items-center">
                                  <Trash2 size={16} className="mr-1" />
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                          {cartItems.indexOf(item) < cartItems.length - 1 && (
                            <Separator className="my-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recently Viewed */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" 
                          alt="Cozy Apartment" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-medium text-sm">Cozy City Apartment</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm font-bold">$89</span>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" 
                          alt="Beef Tacos" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-medium text-sm">Beef Tacos</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm font-bold">$12</span>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" 
                          alt="Bike Rental" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h3 className="font-medium text-sm">Standard Bike</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm font-bold">$8</span>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="md:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes</span>
                        <span>${taxes.toFixed(2)}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Promo Code</label>
                        <div className="flex">
                          <Input placeholder="Enter code" className="rounded-r-none" />
                          <Button variant="secondary" className="rounded-l-none">Apply</Button>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
                        <CreditCard size={18} className="mr-2" />
                        Checkout
                      </Button>
                      
                      <div className="bg-gray-50 p-3 rounded-md text-sm flex items-start">
                        <ShieldCheck size={16} className="text-green-600 mr-2 mt-0.5" />
                        <p className="text-gray-600">
                          Your payment is secured with SSL encryption. We do not store your credit card details.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <Button variant="link" size="sm" className="text-gray-500">
                          Continue Shopping
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button>Start Shopping</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Cart;
