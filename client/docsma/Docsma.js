Template.Docsma.helpers({
    docs: function(){
        return Docs.find();
    }
});

Meteor.subscribe('docs');

Template.Docsma.helpers({
    DocsPdfs: function(){
        return DocsPdfs.find();
    }
});

Meteor.subscribe('DocsPdfs');