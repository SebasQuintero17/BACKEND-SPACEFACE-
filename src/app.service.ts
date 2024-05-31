import { Injectable } from '@nestjs/common';
import { supabase } from './supabase';

@Injectable()
export class UsersService {
  async getUsers() {
    const { data, error } = await supabase.from('Users').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async createUser(user: any) {
    const { data, error } = await supabase.from('Users').insert([user]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  // Otros métodos para interactuar con la tabla de Usuarios
}
