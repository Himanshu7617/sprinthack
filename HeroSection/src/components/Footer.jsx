import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Github,
    Mail,
    MapPin,
    Phone
  } from "lucide-react";
  
  function FooterLink({ href, children }) {
    return (
      <a
        href={href}
        className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  
  export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Company</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#about">About</FooterLink></li>
                <li><FooterLink href="#careers">Careers</FooterLink></li>
                <li><FooterLink href="#press">Press</FooterLink></li>
                <li><FooterLink href="#blog">Blog</FooterLink></li>
              </ul>
            </div>
  
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Services</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#products">Products</FooterLink></li>
                <li><FooterLink href="#solutions">Solutions</FooterLink></li>
                <li><FooterLink href="#pricing">Pricing</FooterLink></li>
                <li><FooterLink href="#enterprise">Enterprise</FooterLink></li>
              </ul>
            </div>
  
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Resources</h3>
              <ul className="space-y-3">
                <li><FooterLink href="#documentation">Documentation</FooterLink></li>
                <li><FooterLink href="#guides">Guides</FooterLink></li>
                <li><FooterLink href="#api">API Reference</FooterLink></li>
                <li><FooterLink href="#support">Support</FooterLink></li>
              </ul>
            </div>
  
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-500">
                  <Mail size={16} />
                  <span>contact@company.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <MapPin size={16} />
                  <span>123 Innovation Drive, San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-slate-500">
                &copy; {currentYear} Company Name. All rights reserved.
              </div>
  
              <div className="flex space-x-5">
                <FooterLink href="https://twitter.com">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </FooterLink>
                <FooterLink href="https://facebook.com">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </FooterLink>
                <FooterLink href="https://instagram.com">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </FooterLink>
                <FooterLink href="https://linkedin.com">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </FooterLink>
                <FooterLink href="https://github.com">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </FooterLink>
              </div>
            </div>
  
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#cookies">Cookie Policy</FooterLink>
              <FooterLink href="#accessibility">Accessibility</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  