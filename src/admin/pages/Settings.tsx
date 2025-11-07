import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Switch } from '../../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Separator } from '../../components/ui/separator';
import { Save, Globe, Mail, Phone, MapPin, Database, Shield, Palette } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Brand settings, SEO tags, contact info, and backup tools.</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Basic company details and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="PharmaCorp" />
                </div>
                <div>
                  <Label htmlFor="company-tagline">Tagline</Label>
                  <Input id="company-tagline" defaultValue="Advancing Healthcare Through Innovation" />
                </div>
              </div>
              <div>
                <Label htmlFor="company-description">Company Description</Label>
                <Textarea
                  id="company-description"
                  defaultValue="PharmaCorp is committed to developing breakthrough treatments that improve patient outcomes and advance medical science."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="founded-year">Founded Year</Label>
                  <Input id="founded-year" defaultValue="1999" />
                </div>
                <div>
                  <Label htmlFor="employee-count">Employee Count</Label>
                  <Input id="employee-count" defaultValue="500+" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Website Settings</CardTitle>
              <CardDescription>General website configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-gray-600">Temporarily disable the website for maintenance</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics-tracking">Analytics Tracking</Label>
                  <p className="text-sm text-gray-600">Enable Google Analytics tracking</p>
                </div>
                <Switch id="analytics-tracking" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="user-registration">User Registration</Label>
                  <p className="text-sm text-gray-600">Allow users to register accounts</p>
                </div>
                <Switch id="user-registration" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Search engine optimization configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="meta-title">Default Meta Title</Label>
                <Input id="meta-title" defaultValue="PharmaCorp - Advancing Healthcare Innovation" />
              </div>
              <div>
                <Label htmlFor="meta-description">Default Meta Description</Label>
                <Textarea
                  id="meta-description"
                  defaultValue="Leading pharmaceutical company specializing in breakthrough treatments and medical innovations."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                <Input id="meta-keywords" defaultValue="pharmaceutical, healthcare, medical innovation, treatments" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="og-image">Open Graph Image URL</Label>
                  <Input id="og-image" defaultValue="/images/og-image.jpg" />
                </div>
                <div>
                  <Label htmlFor="twitter-handle">Twitter Handle</Label>
                  <Input id="twitter-handle" defaultValue="@PharmaCorp" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sitemap & Robots</CardTitle>
              <CardDescription>Search engine crawling settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sitemap-auto">Auto-generate Sitemap</Label>
                  <p className="text-sm text-gray-600">Automatically update sitemap on content changes</p>
                </div>
                <Switch id="sitemap-auto" defaultChecked />
              </div>
              <div>
                <Label htmlFor="robots-txt">Robots.txt Content</Label>
                <Textarea
                  id="robots-txt"
                  defaultValue={`User-agent: *
Allow: /

Sitemap: https://www.pharmacorp.com/sitemap.xml`}
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Company contact details for the website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-email">Primary Email</Label>
                  <Input id="contact-email" type="email" defaultValue="info@pharmacorp.com" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-address">Address</Label>
                <Textarea
                  id="contact-address"
                  defaultValue="123 Pharma Drive
Medical District
New York, NY 10001
United States"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergency-contact">Emergency Contact</Label>
                  <Input id="emergency-contact" defaultValue="+1 (555) 987-6543" />
                </div>
                <div>
                  <Label htmlFor="support-hours">Support Hours</Label>
                  <Input id="support-hours" defaultValue="Mon-Fri 9AM-6PM EST" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Social media profiles and links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" defaultValue="https://linkedin.com/company/pharma-corp" />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter" defaultValue="https://twitter.com/PharmaCorp" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input id="facebook" defaultValue="https://facebook.com/PharmaCorp" />
                </div>
                <div>
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input id="youtube" defaultValue="https://youtube.com/@PharmaCorp" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Assets</CardTitle>
              <CardDescription>Logo, colors, and brand guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="logo-url">Logo URL</Label>
                  <Input id="logo-url" defaultValue="/images/logo.png" />
                </div>
                <div>
                  <Label htmlFor="favicon-url">Favicon URL</Label>
                  <Input id="favicon-url" defaultValue="/favicon.ico" />
                </div>
              </div>
              <div>
                <Label>Primary Colors</Label>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div>
                    <Label htmlFor="primary-color">Primary</Label>
                    <Input id="primary-color" type="color" defaultValue="#3b82f6" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="secondary-color">Secondary</Label>
                    <Input id="secondary-color" type="color" defaultValue="#10b981" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="accent-color">Accent</Label>
                    <Input id="accent-color" type="color" defaultValue="#f59e0b" className="mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Backup & Recovery</CardTitle>
              <CardDescription>Data backup and system maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-backup">Automatic Backups</Label>
                  <p className="text-sm text-gray-600">Daily automatic database backups</p>
                </div>
                <Switch id="auto-backup" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <p className="text-sm text-gray-600">How often to create backups</p>
                </div>
                <select className="border rounded px-3 py-1" defaultValue="daily">
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Database className="mr-2 h-4 w-4" />
                  Create Backup Now
                </Button>
                <Button variant="outline">
                  Download Latest Backup
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>System security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">Require 2FA for all admin accounts</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="session-timeout">Session Timeout</Label>
                  <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                </div>
                <select className="border rounded px-3 py-1" defaultValue="30">
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="240">4 hours</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Security Audit Log
                </Button>
                <Button variant="outline">
                  Reset All Passwords
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}