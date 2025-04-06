export interface RegisterRequest {
  birthday: string;
  firstname: string;
  lastname: string;
  role: 'STUDENT' | 'PARENT' | 'TEACHER';
}
