import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'repofilter'})
export class RepoFilterPipe implements PipeTransform {
    transform(repos , searchTerm: string ){

        if(!repos || !searchTerm){
            return repos;
        }

        return repos.filter(repo =>
            (repo.name).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}
