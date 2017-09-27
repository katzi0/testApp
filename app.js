angular.module('ExamineApp', [])
    .controller('examinCtrl', function ($scope) {

        $scope.test = 1234;

        $scope.contacts = [
            {
                id: 1,
                name: "Friends",
                type: "Group",
                contacts: [
                    { id: 2, name: "Udi", type: "Contact" },
                    { id: 3, name: "Tommy", type: "Contact" },
                    {
                        id: 6,
                        name: "Old Friends",
                        type: "Group",
                        contacts: [
                            { id: 7, name: "Itay", type: "Contact" },
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: "Family",
                type: "Group",
                contacts: [
                    { id: 5, name: "Roni", type: "Contact" },
                ]
            },
            { id: 8, name: "Ori", type: "Contact" },
        ];
       $scope.selectedContact = '';
       $scope.iscollapsedArr = [];
       $scope.iscollapsedSubArr = [];
       $scope.toggleGroup = function(contact) {
        var index = $scope.iscollapsedArr.indexOf(contact.id);    
            if(index == -1){
                    $scope.iscollapsedArr.push(contact.id);
                }
                else{
                    $scope.iscollapsedArr.splice(index,1);
                }  
            }


        $scope.toggleSubGroup = function(contact) {
            var index = $scope.iscollapsedArr.indexOf(contact.id);    
            if(index == -1){
                $scope.iscollapsedSubArr.push(contact.id);
            }
            else{
                $scope.iscollapsedSubArr.splice(index,1);
            } 
        }
    })