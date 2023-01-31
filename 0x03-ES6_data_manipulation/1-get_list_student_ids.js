export default function getListStudents(students) {
	  if (!Array.isArray(students)) {
		      return [];
		    }

	  const arr = [
		      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
		      { id: 2, firstName: 'James', location: 'Columbia' },
		      { id: 5, firstName: 'Serena', location: 'San Francisco' },
		    ];

	  return arr;
}

