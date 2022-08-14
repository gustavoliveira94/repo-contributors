import { IRepositories } from 'domain/models/repositories/repositories';

export interface IallRepositories {
  total_count: number;
  incomplete_results: boolean;
  items: IRepositories[];
}
