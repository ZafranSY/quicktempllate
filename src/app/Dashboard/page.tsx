import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Search,
  Plus,
  Clock,
  Star,
  FileSignature,
  Briefcase,
  Mail,
  Award,
  Heart,
  Settings,
  ChevronRight,
  Filter,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex gap-2 items-center text-xl font-bold mr-4">
            <FileText className="h-6 w-6" />
            <span>TemplateGen</span>
          </div>
          <div className="flex-1 flex items-center px-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search templates..." className="w-full pl-8 bg-muted" />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <div className="relative">
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  className="rounded-full"
                  alt="User avatar"
                />
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary" />
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-8">
          {/* Welcome Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
                <p className="text-muted-foreground">Create and manage your templates</p>
              </div>
              <Button className="gap-1">
                <Plus className="h-4 w-4" />
                New Template
              </Button>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Templates</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border p-2">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                      <FileSignature className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">My Resume</p>
                      <p className="text-xs text-muted-foreground">Edited 2 days ago</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-2">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                      <Heart className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Takziah Card</p>
                      <p className="text-xs text-muted-foreground">Edited 5 days ago</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full gap-1">
                  <Clock className="h-4 w-4" />
                  View All Recent
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Favorites</CardTitle>
                <CardDescription>Your saved templates</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border p-2">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Business Proposal</p>
                      <p className="text-xs text-muted-foreground">Professional template</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-2">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                      <Mail className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Cover Letter</p>
                      <p className="text-xs text-muted-foreground">Modern style</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full gap-1">
                  <Star className="h-4 w-4" />
                  View All Favorites
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Start</CardTitle>
                <CardDescription>Create a new template</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 justify-start items-center">
                    <FileSignature className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium">Resume</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 justify-start items-center">
                    <Heart className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium">Takziah Card</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 justify-start items-center">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium">Business Card</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-4 gap-2 justify-start items-center">
                    <Mail className="h-8 w-8 text-primary" />
                    <span className="text-xs font-medium">Cover Letter</span>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full gap-1">
                  <Plus className="h-4 w-4" />
                  Browse All Templates
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Template Categories */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">All Templates</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Resume Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resume template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resume Templates</p>
                        <p className="text-xs text-muted-foreground">12 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileSignature className="h-4 w-4" />
                        Browse Resumes
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Takziah Card Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Takziah card template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Takziah Cards</p>
                        <p className="text-xs text-muted-foreground">8 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Heart className="h-4 w-4" />
                        Browse Takziah Cards
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Business Card Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Business card template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Business Cards</p>
                        <p className="text-xs text-muted-foreground">15 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Briefcase className="h-4 w-4" />
                        Browse Business Cards
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Cover Letter Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Cover letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Cover Letters</p>
                        <p className="text-xs text-muted-foreground">10 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Cover Letters
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Business Proposal Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Business proposal template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Business Proposals</p>
                        <p className="text-xs text-muted-foreground">7 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileText className="h-4 w-4" />
                        Browse Proposals
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Resignation Letter Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resignation letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resignation Letters</p>
                        <p className="text-xs text-muted-foreground">5 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileText className="h-4 w-4" />
                        Browse Resignation Letters
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Certificate Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Certificate template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Certificates</p>
                        <p className="text-xs text-muted-foreground">9 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Award className="h-4 w-4" />
                        Browse Certificates
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Invitation Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Invitation template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Invitations</p>
                        <p className="text-xs text-muted-foreground">14 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Invitations
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="professional" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Professional category templates would go here */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resume template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resume Templates</p>
                        <p className="text-xs text-muted-foreground">12 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileSignature className="h-4 w-4" />
                        Browse Resumes
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Cover letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Cover Letters</p>
                        <p className="text-xs text-muted-foreground">10 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Cover Letters
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              {/* Other tab contents would follow the same pattern */}
            </Tabs>
          </section>
        </div>
      </main>
      <footer className="w-full border-t py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TemplateGen. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Help Center
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

