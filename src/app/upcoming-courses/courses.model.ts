export const coursesAttributesMapping = {
    active: 'Active',
    id: 'ID',
    title: 'Title',
    title1: 'Course',
    title2: 'Days',
    date: 'Date',
    time: 'Time',
    actualFee: 'Actual Fee',
    discountFee: 'Discount Fee',
    description: 'Description',
    buttonText: 'Button Text',
    totalSeats: 'Total Seats',
    availableSeats: 'Available Seats'
    // contact: {
    //   _prefix: 'Contact',
    //   phone: 'Phone'
    // }
    // skills: {
    //   _prefix: 'Skill',
    //   _listField: true
    // }
  };
  
  export interface Courses {
    active: string;
    id: string;
    title: string;
    title1: string;
    title2: string;
    date: string;
    time: string;
    actualFee: string;
    discountFee: string;
    description: string;
    buttonText: string;
    totalSeats: string;
    availableSeats: string;
    // contact: {
    //   phone: string;
    // };
    // skills: string[];
  }
  