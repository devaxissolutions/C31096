import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Plus, Edit, Trash2, Clock, CheckCircle, AlertCircle, Play } from 'lucide-react';

const pipelineStages = [
  { id: 'discovery', name: 'Discovery', color: 'bg-blue-500', icon: Clock },
  { id: 'preclinical', name: 'Preclinical', color: 'bg-yellow-500', icon: AlertCircle },
  { id: 'clinical', name: 'Clinical', color: 'bg-orange-500', icon: Play },
  { id: 'launch', name: 'Launch', color: 'bg-green-500', icon: CheckCircle }
];

const pipelineItems = [
  {
    id: '1',
    name: 'PC-2024-001',
    description: 'Novel cardiovascular compound',
    stage: 'discovery',
    progress: 25,
    startDate: '2024-01-15',
    estimatedCompletion: '2025-06-15',
    team: 'Cardio Team',
    budget: '$2.5M'
  },
  {
    id: '2',
    name: 'PC-2024-002',
    description: 'Neurological treatment innovation',
    stage: 'preclinical',
    progress: 60,
    startDate: '2024-02-01',
    estimatedCompletion: '2025-12-01',
    team: 'Neuro Team',
    budget: '$3.2M'
  },
  {
    id: '3',
    name: 'PC-2023-005',
    description: 'Oncology breakthrough therapy',
    stage: 'clinical',
    progress: 80,
    startDate: '2023-08-15',
    estimatedCompletion: '2025-03-15',
    team: 'Onco Team',
    budget: '$5.1M'
  }
];

export default function Pipeline() {
  const [selectedStage, setSelectedStage] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredItems = selectedStage === 'all'
    ? pipelineItems
    : pipelineItems.filter(item => item.stage === selectedStage);

  const getStageInfo = (stageId: string) => {
    return pipelineStages.find(stage => stage.id === stageId) || pipelineStages[0];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">R&D Pipeline</h1>
          <p className="text-gray-600">Track innovation stages from Discovery to Launch.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Pipeline Item
          </Button>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add Pipeline Item</DialogTitle>
              <DialogDescription>
                Create a new R&D pipeline entry.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pipeline-name" className="text-right">
                  Name
                </Label>
                <Input id="pipeline-name" placeholder="PC-2024-XXX" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pipeline-stage" className="text-right">
                  Stage
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {pipelineStages.map(stage => (
                      <SelectItem key={stage.id} value={stage.id}>
                        {stage.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pipeline-description" className="text-right">
                  Description
                </Label>
                <Textarea id="pipeline-description" placeholder="Brief description" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pipeline-team" className="text-right">
                  Team
                </Label>
                <Input id="pipeline-team" placeholder="Team name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pipeline-budget" className="text-right">
                  Budget
                </Label>
                <Input id="pipeline-budget" placeholder="$0.00" className="col-span-3" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Add to Pipeline
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Pipeline Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pipelineStages.map((stage) => {
          const stageItems = pipelineItems.filter(item => item.stage === stage.id);
          return (
            <Card key={stage.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-full ${stage.color}`}>
                    <stage.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{stage.name}</h3>
                    <p className="text-sm text-gray-600">{stageItems.length} projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pipeline Items */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Stages</TabsTrigger>
          {pipelineStages.map(stage => (
            <TabsTrigger key={stage.id} value={stage.id}>
              {stage.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredItems.map((item) => {
              const stageInfo = getStageInfo(item.stage);
              return (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <Badge variant="outline" className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${stageInfo.color}`}></div>
                            <span>{stageInfo.name}</span>
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Team:</span> {item.team}
                          </div>
                          <div>
                            <span className="font-medium">Budget:</span> {item.budget}
                          </div>
                          <div>
                            <span className="font-medium">Start:</span> {item.startDate}
                          </div>
                          <div>
                            <span className="font-medium">Est. Complete:</span> {item.estimatedCompletion}
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {pipelineStages.map((stage) => (
          <TabsContent key={stage.id} value={stage.id} className="space-y-4">
            <div className="grid gap-4">
              {filteredItems
                .filter(item => item.stage === stage.id)
                .map((item) => {
                  const stageInfo = getStageInfo(item.stage);
                  return (
                    <Card key={item.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <Badge variant="outline" className="flex items-center space-x-1">
                                <div className={`w-2 h-2 rounded-full ${stageInfo.color}`}></div>
                                <span>{stageInfo.name}</span>
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Team:</span> {item.team}
                              </div>
                              <div>
                                <span className="font-medium">Budget:</span> {item.budget}
                              </div>
                              <div>
                                <span className="font-medium">Start:</span> {item.startDate}
                              </div>
                              <div>
                                <span className="font-medium">Est. Complete:</span> {item.estimatedCompletion}
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{item.progress}%</span>
                              </div>
                              <Progress value={item.progress} className="h-2" />
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}