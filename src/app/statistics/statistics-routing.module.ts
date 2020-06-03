import { Routes, RouterModule } from '@angular/router';
import { StatisticsPage } from './statistics.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: StatisticsPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StatisticsPageRoutingModule{}