package model

// CaptchaParams
type CaptchaParams struct {
	Type   string `gorm:"column:type" json:"type"`
	Height string `gorm:"column:height" json:"height"`
	Width  string `gorm:"column:width" json:"width"`
	Length string `gorm:"column:length" json:"length"`
}

// Captcha
type Captcha struct {
	CapID     string `json:"capid"`
	CapString string `json:"capstring"`
}

// LoginParams
type LoginParams struct {
	Account  string `form:"account" json:"account" xml:"account" binding:"required"`
	Pwd      string `form:"pwd" json:"pwd" xml:"pwd" binding:"required"`
	CapID    string `form:"capID" json:"capID" xml:"capID" binding:"required"`
	VerValue string `form:"verValue" json:"verValue" xml:"verValue" binding:"required"`
}

// Group
type Group struct {
	GroupID     string `json:"groupId"`
	Name        string `json:"name"`
	ParentID    string `json:"parentId"`
	OrderID     int    `json:"orderId"`
	Attribute1  string `json:"attribute1"`
	Attribute2  string `json:"attribute2"`
	Attribute3  string `json:"attribute3"`
	Attribute4  string `json:"attribute4"`
	Attribute5  string `json:"attribute5"`
	Attribute6  string `json:"attribute6"`
	Attribute7  string `json:"attribute7"`
	Attribute8  string `json:"attribute8"`
	Attribute9  string `json:"attribute9"`
	Attribute10 string `json:"attribute10"`
}

// Role
type Role struct {
	AppID       string `json:"appId"`
	RoleID      string `json:"roleId"`
	RoleCode    string `json:"roleCode"`
	RoleName    string `json:"roleName"`
	Description string `json:"description"`
	Attribute1  string `json:"attribute1"`
	Attribute2  string `json:"attribute2"`
	Attribute3  string `json:"attribute3"`
	Attribute4  string `json:"attribute4"`
	Attribute5  string `json:"attribute5"`
	Attribute6  string `json:"attribute6"`
	Attribute7  string `json:"attribute7"`
	Attribute8  string `json:"attribute8"`
	Attribute9  string `json:"attribute9"`
	Attribute10 string `json:"attribute10"`
}

// GroupUser
type GroupUser struct {
	GroupID         string `json:"groupId"`
	GroupName       string `json:"groupName"`
	UserID          string `form:"userId" json:"userId" xml:"userId"`
	LoginName       string `form:"loginName" json:"loginName" xml:"loginName"`
	UserName        string `form:"userName" json:"userName" xml:"userName"`
	UserChineseName string `form:"userChineseName" json:"userChineseName" xml:"userChineseName"`
	UserTypeName    string `form:"userTypeName" json:"userTypeName" xml:"userTypeName"`
	Gender          int    `form:"gender" json:"gender" xml:"gender"`
	Email           string `form:"email" json:"email" xml:"email"`
	Phone           string `form:"phone" json:"phone" xml:"phone"`
	ExtensionNumber string `form:"extensionNumber" json:"extensionNumber" xml:"extensionNumber"`
	Mobile          string `form:"mobile" json:"mobile" xml:"mobile"`
	Address         string `form:"address" json:"address" xml:"address"`
	Fax             string `form:"fax" json:"fax" xml:"fax"`
	Password        string `form:"password" json:"password" xml:"password"`
}

// RoleUserAuth
type RoleUserAuth struct {
	AppID       string `json:"appId"`
	Description string `json:"description"`
	ObjectType  string `json:"objectType"`
	ObjectID    string `json:"objectId"`
	ObjectName  string `json:"objectName"`
	RoleID      string `json:"roleId"`
	RoleName    string `json:"roleName"`
}
