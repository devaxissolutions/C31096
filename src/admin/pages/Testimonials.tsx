import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { CheckCircle, XCircle, Clock, MessageSquare, User, Eye, Edit, Trash2 } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    author: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    organization: 'City General Hospital',
    content: 'PharmaCorp\'s cardiovascular treatments have significantly improved patient outcomes in our practice. The quality and efficacy are outstanding.',
    rating: 5,
    status: 'Approved',
    submittedDate: '2024-01-15',
    approvedDate: '2024-01-16'
  },
  {
    id: '2',
    author: 'Dr. Michael Chen',
    role: 'Neurologist',
    organization: 'NeuroCare Clinic',
    content: 'The neurological medications from PharmaCorp have shown remarkable results in treating complex conditions. Highly recommended.',
    rating: 5,
    status: 'Pending',
    submittedDate: '2024-01-20',
    approvedDate: null
  },
  {
    id: '3',
    author: 'Patient Anonymous',
    role: 'Patient',
    organization: 'N/A',
    content: 'The treatment I received has changed my life. Thank you PharmaCorp for the hope and recovery.',
    rating: 5,
    status: 'Rejected',
    submittedDate: '2024-01-10',
    approvedDate: null,
    rejectionReason: 'Insufficient detail'
  }
];

export default function Testimonials() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const filteredTestimonials = testimonials.filter(testimonial =>
    selectedStatus === 'all' || testimonial.status === selectedStatus
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'Rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleReview = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsReviewDialogOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
          <p className="text-gray-600">Manage patient and healthcare provider testimonials.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{testimonials.length}</p>
                <p className="text-sm text-gray-600">Total Testimonials</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{testimonials.filter(t => t.status === 'Approved').length}</p>
                <p className="text-sm text-gray-600">Approved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">{testimonials.filter(t => t.status === 'Pending').length}</p>
                <p className="text-sm text-gray-600">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold">{testimonials.filter(t => t.status === 'Rejected').length}</p>
                <p className="text-sm text-gray-600">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Testimonials</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Testimonials ({filteredTestimonials.length})</CardTitle>
              <CardDescription>Manage and moderate testimonials</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Author</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTestimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-sm text-gray-600">{testimonial.organization}</p>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <p className="truncate">{testimonial.content}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(testimonial.status)}</TableCell>
                      <TableCell>{testimonial.submittedDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleReview(testimonial)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {['pending', 'approved', 'rejected'].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {status.charAt(0).toUpperCase() + status.slice(1)} Testimonials ({
                    testimonials.filter(t => t.status === (status === 'pending' ? 'Pending' : status === 'approved' ? 'Approved' : 'Rejected')).length
                  })
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testimonials
                    .filter(t => t.status === (status === 'pending' ? 'Pending' : status === 'approved' ? 'Approved' : 'Rejected'))
                    .map((testimonial) => (
                      <Card key={testimonial.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <User className="h-5 w-5 text-gray-400" />
                                <div>
                                  <p className="font-medium">{testimonial.author}</p>
                                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.organization}</p>
                                </div>
                              </div>
                              <p className="text-gray-700 mb-2">{testimonial.content}</p>
                              <div className="flex items-center space-x-4">
                                <div className="flex">
                                  {renderStars(testimonial.rating)}
                                </div>
                                <span className="text-sm text-gray-500">Submitted: {testimonial.submittedDate}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2 ml-4">
                              {testimonial.status === 'Pending' && (
                                <>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Approve
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Reject
                                  </Button>
                                </>
                              )}
                              <Button variant="ghost" size="sm" onClick={() => handleReview(testimonial)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Review Dialog */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Review Testimonial</DialogTitle>
            <DialogDescription>
              Review and moderate this testimonial submission.
            </DialogDescription>
          </DialogHeader>
          {selectedTestimonial && (
            <div className="space-y-4">
              <div>
                <Label>Author</Label>
                <p className="text-sm font-medium">{selectedTestimonial.author}</p>
                <p className="text-sm text-gray-600">{selectedTestimonial.role} at {selectedTestimonial.organization}</p>
              </div>
              <div>
                <Label>Content</Label>
                <Textarea value={selectedTestimonial.content} readOnly rows={4} />
              </div>
              <div>
                <Label>Rating</Label>
                <div className="flex">
                  {renderStars(selectedTestimonial.rating)}
                </div>
              </div>
              <div>
                <Label>Status</Label>
                <p>{getStatusBadge(selectedTestimonial.status)}</p>
              </div>
              {selectedTestimonial.status === 'Rejected' && selectedTestimonial.rejectionReason && (
                <div>
                  <Label>Rejection Reason</Label>
                  <p className="text-sm text-red-600">{selectedTestimonial.rejectionReason}</p>
                </div>
              )}
              {selectedTestimonial.status === 'Pending' && (
                <div>
                  <Label htmlFor="rejection-reason">Rejection Reason (if rejecting)</Label>
                  <Textarea id="rejection-reason" placeholder="Reason for rejection..." />
                </div>
              )}
            </div>
          )}
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsReviewDialogOpen(false)}>
              Close
            </Button>
            {selectedTestimonial?.status === 'Pending' && (
              <>
                <Button variant="destructive">
                  <XCircle className="h-4 w-4 mr-1" />
                  Reject
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Approve
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}