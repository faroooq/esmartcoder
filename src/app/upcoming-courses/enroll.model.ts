export const enrollAttributesMapping = {
    id: 'ID',
    name: 'Name',
    course: 'Course',
    email: 'Email Address',
    contact: {
      _prefix: 'Contact',
      phone: 'Phone'
    }
    // skills: {
    //   _prefix: 'Skill',
    //   _listField: true
    // }
  };
  
  export interface EnrollData {
    id: string;
    name: string;
    course: string;
    email: string;
    contact: {
      phone: string;
    };
    // skills: string[];
  }
  