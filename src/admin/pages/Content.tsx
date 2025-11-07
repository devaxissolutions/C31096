import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Save, Eye, FileText, BarChart3, Pill, GitBranch, Building, MessageSquare } from 'lucide-react';

const contentBlocks = [
  { id: 'hero', name: 'Hero Section', icon: Eye, path: '/admin/content/hero' },
  { id: 'metrics', name: 'Key Metrics', icon: BarChart3, path: '/admin/content/metrics' },
  { id: 'treatments', name: 'Treatments', icon: Pill, path: '/admin/content/treatments' },
  { id: 'pipeline', name: 'R&D Pipeline', icon: GitBranch, path: '/admin/content/pipeline' },
  { id: 'about', name: 'About Us', icon: Building, path: '/admin/content/about' },
  { id: 'gallery', name: 'Gallery', icon: FileText, path: '/admin/content/gallery' }
];

function ContentOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <p className="text-gray-600">Full control over homepage blocks and content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentBlocks.map((block) => (
          <Link key={block.id} to={block.path}>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <block.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{block.name}</h3>
                    <p className="text-sm text-gray-600">Manage {block.name.toLowerCase()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hero Section</h1>
          <p className="text-gray-600">Edit the main hero banner content</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hero Content</CardTitle>
          <CardDescription>Update the main headline, subtitle, and call-to-action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="hero-title">Main Headline</Label>
            <Input
              id="hero-title"
              defaultValue="Advancing Healthcare Through Innovation"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="hero-subtitle">Subtitle</Label>
            <Textarea
              id="hero-subtitle"
              defaultValue="PharmaCorp is committed to developing breakthrough treatments that improve patient outcomes and advance medical science."
              className="mt-1"
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="hero-cta">Call-to-Action Text</Label>
            <Input
              id="hero-cta"
              defaultValue="Explore Our Products"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="hero-image">Background Image URL</Label>
            <Input
              id="hero-image"
              defaultValue="/images/hero-bg.jpg"
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Key Metrics</h1>
          <p className="text-gray-600">Update the statistics displayed on the homepage</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Metric 1</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="metric1-value">Value</Label>
              <Input id="metric1-value" defaultValue="500+" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="metric1-label">Label</Label>
              <Input id="metric1-label" defaultValue="Products Developed" className="mt-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Metric 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="metric2-value">Value</Label>
              <Input id="metric2-value" defaultValue="25+" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="metric2-label">Label</Label>
              <Input id="metric2-label" defaultValue="Years of Experience" className="mt-1" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TreatmentsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Treatments Section</h1>
          <p className="text-gray-600">Manage the treatments showcase on the homepage</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Treatments Content</CardTitle>
          <CardDescription>Update the treatments section title and description</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="treatments-title">Section Title</Label>
            <Input
              id="treatments-title"
              defaultValue="Our Treatment Portfolio"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="treatments-description">Section Description</Label>
            <Textarea
              id="treatments-description"
              defaultValue="Discover our comprehensive range of pharmaceutical treatments designed to address various medical conditions."
              className="mt-1"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Content() {
  const location = useLocation();
  const isSubRoute = location.pathname !== '/admin/content';

  if (isSubRoute) {
    return (
      <Routes>
        <Route path="/hero" element={<HeroContent />} />
        <Route path="/metrics" element={<MetricsContent />} />
        <Route path="/treatments" element={<TreatmentsContent />} />
        <Route path="/pipeline" element={<div>Pipeline Content Editor</div>} />
        <Route path="/about" element={<div>About Content Editor</div>} />
        <Route path="/gallery" element={<div>Gallery Content Editor</div>} />
      </Routes>
    );
  }

  return <ContentOverview />;
}