// alert('hello!')
// console.log('hello')

// setInterval(function() {
//     console.log('hello');
// },1000)

var a = 1;
var b = 2;

var ketQua = 'A' || 'B' || 0;
console.log(ketQua);


var firstName = 'Nguyen \'Hoang\' Vu';
console.log(firstName);


var firstName = 'Vu';
var lastName = 'Nguyen';
console.log(`Toi la: ${firstName} ${lastName}`);


var myString = "Hoang Vu Hoang Vu Vu";
console.log(myString.lastIndexOf('Vu'));

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(6,8))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(6))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(0))

var myString = 'Hoang Vu Hoang Vu!';
console.log(myString.slice(-3,-1))

var myString = 'Hoang Vu';
console.log(myString.replace('Vu', 'Viet'))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.replace(/Vu/g, 'Viet'))

var myString = 'Hoang Vu';
console.log(myString.toUpperCase())

var myString = 'Hoang Vu';
console.log(myString.toLowerCase())

var myString = 'Hoang Vu';
console.log(myString.charAt(0))

var age = 18;
var PI = 3.14;
console.log(age.toString())

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(languages.pop())
// console.log(languages)

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];
// console.log(languages.push('Dart', 'Java'))
// console.log(languages)

// console.log(languages.splice(1,1))
// console.log(languages)

console.log(languages.slice(1,2))

// Ham
// function showDislog() {
//     alert('Hello!')
//}
//showDislog();

/*function writeLog(message1, message2) {
    if(message1)
    {
        console.log(message1);
    }
    if(message2)
    {
        console.log(message2);
    }
}
writeLog('Hoang', 'Vu');*/

/*function writeLog() {
    
        console.log(arguments);
    
}
writeLog('Hoang', 'Vu');*/

function writeLog() {
    var myString = '';
    for(var param of arguments)
    {
        myString += `${param} - `;
    }
    console.log(myString)
}
writeLog('Hoang', 'Vu');

// Object
var myInfo = {
    name: 'Hoang Vu',
    age: 20,
    address: 'Da Nang',

    getName: function() {   // có thể lưu trữ value là q function
        return this.name;
    }
};
//myInfo.email = 'hoangvu22062001@gmail.com'; //Thêm vào 1 key mới
myInfo['my-email'] = 'hoangvu22062001@gmail.com'; //Thêm vào 1 key mới

//console.log(myInfo.name); // lây value ra ngoai
//console.log(myInfo['name']); // lây value ra ngoai

//delete myInfo.age; //xóa key

console.log(myInfo.getName()); // có thể lưu trữ value là q function
console.log(myInfo);


// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Hoàng', 'Vũ', 'Avatar');
var user = new User('Hoàng', 'Việt', 'Avatar');

author.title = 'Chia sẻ tại đây';
user.comment = 'dạy thêm đi ạ';

console.log(author);
console.log(user);

//Đối tượng Date
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1; //month chạy từ 0->11
var year = date.getFullYear();

console.log(`${day}/${month}/${year}`);

//if else
var date = 3;

if(date === 2)
{
    console.log('Hôm nay là thứ 2');
}else if(date === 3){
    console.log('Hôm nay là thứ 3');
}else {
    console.log('Không có');
}

//Switch
var date = 9;

switch(date) {
    case 2: console.log('Hôm nay là thứ 2'); break;
    case 3: console.log('Hôm nay là thứ 3'); break;
    case 4: console.log('Hôm nay là thứ 4'); break;
    default: console.log('Không có !!!');
}   

// Toán tử 3 ngôi
var course = {
    name: 'Javascirpt',
    coin: 250
}

/*if(course.coin > 0) {
    console.log(`${course.coin} Coins`);
} else {
    console.log('Miễn Phí!')
}*/

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn Phí!';
console.log(result);

// for loop
var myArray = [
    'Java',
    'Ryby',
    'Python'
];
var arrayLength = myArray.length;
for(var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

//for/in
var myInfo = {
    name: 'Hoang Vu',
    age: 20,
    address: 'Da Nang'
};
for(var key in myInfo) {  // chữ key là tự đặt tên
    console.log(myInfo[key]);
}

//while
var i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

//do/while
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

//Break in loop
for (var i = 0; i<= 10; i++) {
    console.log(i);

    if(i>=5) {
        break;
    }
}
//continue in loop
for (var i = 0; i<= 10; i++) {
    if(i%2 === 0) {
        continue;
    }
    console.log(i);
}

//Vòng lặp lồng nhau
var myArray = [
    [1,2],
    [3,4],
    [5,6]
];
for (var i=0; i<myArray.length; i++) {
    for(var j=0; j<myArray[i].length; j++) {
        console.log(myArray[i][j]); 
    }
}
//
for (var i=100; i>0; i-=5) {
    console.log(i);
}


// Array method
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 500
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'CSS',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 200
    }
]; 
//  forEach() : duyệt qua từng phần tử của mảng
courses.forEach(function(course, index) {
    console.log(index, course);
});

//  every() : kiểm tra tất cả các phần tử phải thỏa mãn 1 điều kiện gì đó
// VD: kiểm tra xem tất cả các khóa học có miễn phí hay k, coin = 0 là free. --> trả về kiểu boolean
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//  some() : chỉ kiểm tra 1 phần tử thỏa mãn được điểu kiện gì đó thì trả về true
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//  find() : Tìm kiếm ( trả về phần tử đầu tiên nó tìm thấy )
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

//  filter() : Tìm kiếm ( trả về tất cả các phần tử nó tìm thấy )
var course = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

//  map() : dùng map khi muốn chỉnh sửa hay thay đổi element của 1 array
// VD1: Thêm vào mỗi key name : 'Khoa hoc ...' , và thêm key coinText: 'Gia: ... '
function addCourses(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    };
}

var newCourses = courses.map(addCourses);
console.log(newCourses);

// VD2: lấy tất cả tên của mảng courses chuyển sang mảng mới.
// function addCourses(course, index) {
//     return course.name;
// }

// var newCourses = courses.map(addCourses);
// console.log(newCourses);

//  reduce() : khi muốn nhận về giá trị duy nhất sau khi tính toán và sử lí trên những phần tử trong 1 array
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);  // 0 là giá trị khởi tạo
console.log(totalCoin);

//BTUD
// Flat - "Làm phẳng" mảng từ Depth Array - "Mảng sâu"
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, []);
console.log(flatArray);



//forEach() method
Array.prototype.forEach2 = function(callback) { // định nghĩ phương thức forEach2
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            console.log(index);
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});

//filter() method
Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 890
    },
    {
        name: 'Ruby',
        coin: 900
    }
];
var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
});
console.log(filterCourses);

//some() method -> trả về true or false
Array.prototype.some2 = function(callback) {
    var output = false;
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            if(callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 890,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 900,
        isFinish: false
    }
];
var result = courses.some2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(result);

//every() method
Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index], index, this);
                if (!result) {
                    output = false;
                    break;
                }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 890,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 900,
        isFinish: true
    }
];
var result = courses.every2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(result);  


//Xóa các phần tử bị trùng. Yêu cầu output ra nằm trong 1 mảng
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log([...(new Set(array))]);
//C1: console.log(new Set(array));

document.write('Hello');