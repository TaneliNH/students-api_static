const studentData=[
    {id_student:1, firstname:'Teppo', lastname: 'Testi'},
    {id_student:2, firstname:'Liisa', lastname: 'Virta'},
    {id_student:3, firstname:'Aino', lastname: 'Meri'}
];

const student={
    getAllStudents: function(){
        return studentData;
    },
    getOneStudent: function(id){
        return studentData[id-1];
    },
    addStudent: function(newData){
        //let sql="insert into student values("+newData.id_student+","+newData.firstname+",");";
        //return "Lisätään uusi opiskelija";
        return newData;
    },
    updateStudent: function(id){
        return "Päivitetään opiskelija, jonka id="+id;
    },
    deleteStudents: function(){
        return "Poistetaan opiskelija, jonka id="+id;
    }
};
module.exports=student;