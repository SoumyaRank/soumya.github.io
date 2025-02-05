import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { MmwaveComponent } from './mmwave/mmwave.component';
import { FranceComponent } from './france/france.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent},
    { path: 'Experience', component: ExperienceComponent},
    { path: 'Projects', component: ProjectsComponent},
    { path: 'Extracurricular', component: ExtracurricularComponent},
    { path: 'Skills', component: SkillsComponent},
    { path: 'mmwave', component: MmwaveComponent},
    { path: 'france', component: FranceComponent},
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
