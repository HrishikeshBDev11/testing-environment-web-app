import { Component, OnInit } from '@angular/core';
import { NewMeetDetail } from 'src/app/shared/modals/newMeetDetail';
import { MeetingsService } from '../../services/meetings.service';
import { Router } from '@angular/router';
import { UserDetail } from 'src/app/shared/modals/userDetail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _meetingServices: MeetingsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let _user = localStorage.getItem('user%')
    console.log(_user);
  }

  meetType: string = '';
  creatingMeetType: string = '';
  joiningMeetType: string = '';
  // newMeetFormType: string = '';
  newMeetGeneratedCode: string = '';
  newMeetDetail: NewMeetDetail = new NewMeetDetail();
  joiningUserDetail: UserDetail = new UserDetail();

  generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 10;
    let randomCode = '';

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }

    this.newMeetGeneratedCode = randomCode;
  }

  setNewMeetDetail(_newMeetName: string, _meetType: string) {
    this.creatingMeetType = _newMeetName;
    this.meetType = _meetType;
    this.generateRandomCode()
  }

  setJoiningMeetDetail(_joiningMeetName: string, _meetType: string) {
    this.joiningMeetType = _joiningMeetName;
    this.meetType = _meetType;
  }

  createMeet() {

    if (!this.newMeetGeneratedCode) {
      alert('Meet code is invalid, Please retry again later.');
      return false;
    }

    if (!this.creatingMeetType) {
      alert('Meet type is invalid, Please retry again later.');
      return false;
    }

    if (!this.newMeetDetail.MeetDateTime) {
      alert('Please select date & time for meet!');
      return false;
    }

    if (!this.newMeetDetail.MeetCandidateQuantity || this.newMeetDetail.MeetCandidateQuantity == '0') {
      alert('Please enter candiate number!');
      return false;
    }

    this.newMeetDetail.MeetCode = this.newMeetGeneratedCode;
    this.newMeetDetail.MeetName = this.creatingMeetType;
    // this.newMeetDetail.MeetType = this.joiningMeetType;
    if (this.newMeetDetail.MeetCandidateQuantity && this.newMeetDetail.MeetDateTime && this.newMeetDetail.MeetCode && this.newMeetDetail.MeetName) {
      this._meetingServices.saveAndGenerateMeet(this.newMeetDetail);
      this.meetType = 'new_meet_successful_form';
      // setTimeout(() => {
      //   this.meetType = '';
      // }, 2000);
    }

    return true;

  }

  joinMeet() {
    debugger
    if(this.checkIsMeet_Exist(this.joiningUserDetail.MeetCode) && this._meetingServices.checkUserCount_InMeeting(this.joiningUserDetail.MeetCode)){
      this._meetingServices.joinMeet(this.joiningUserDetail);
      this._router.navigate(['meeting'], { queryParams: { meetId: this.joiningUserDetail.MeetCode, userId: this.joiningUserDetail.ConatctNo } })
    }

  }

  isNewUserSession: boolean = false
  getUserActiveSessionDetail(_contactNo: string) {
    // debugger
    if (_contactNo.length === 10) {
      debugger
      let _userSession = this._meetingServices.getUserDetailByContactNo(_contactNo) || null;
      if (!_userSession) {
        this.isNewUserSession = true;
      }
    } else {
      this.isNewUserSession = false;
    }

  }

  checkIsMeet_Exist(_meetCode: string) {
    // debugger
    let _meetDetail: NewMeetDetail = this._meetingServices.getMeetDetailsByMeetCode(_meetCode);
    if (_meetDetail) {
      if (_meetDetail.MeetName.toLowerCase().trim() === this.joiningMeetType.toLowerCase().trim()) {
        return true;
      } else {
        alert('Please enter correct meet code.')
        return false;
      }
    } else {
      alert('Please enter correct meet code.')
      return false;
    }
  }

  isCopied: boolean = false
  copyCode_Clipboard() {

    if (!this.newMeetGeneratedCode) {
      alert('Meet code is invalid, Please retry again later.');
      return false;
    }

    navigator.clipboard.writeText(this.newMeetGeneratedCode)
      .then(() => {
        console.log('Text copied to clipboard:', this.newMeetGeneratedCode);
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false
        }, 1000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });

    return true;
  }

  navigate_MeetingScreen() {
    this._router.navigate(['meeting'], { queryParams: { meetId: this.newMeetGeneratedCode } })
  }

  reset() {
    this.meetType = '';
    this.creatingMeetType = '';
    this.newMeetGeneratedCode = '';
    this.newMeetDetail = new NewMeetDetail();
  }

}
