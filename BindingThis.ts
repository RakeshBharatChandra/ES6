const Man = {
    name: 'Raki',
    talk: function () {
        console.log(this);
    }
};
Man.talk();

const talk = Man.talk.bind(this);
talk();
//console.log(talk);