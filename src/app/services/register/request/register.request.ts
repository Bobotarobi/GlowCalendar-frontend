export interface RegisterRequest {
  birthday: string;
  fistname: string;
  lastname: string;
  role: 'STUDENT' | 'PARENT' | 'TEACHER';
}
