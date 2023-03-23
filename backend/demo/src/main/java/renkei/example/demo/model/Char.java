package renkei.example.demo.model;

import lombok.Data;

@Data
public class Char {
	/**
	 * タイトル
	 */
	private String title;
	
	/*
	 * 名前
	 */
	private String name;
	
	/*
	 * 種族
	 */
	private String race;
	
	/*
	 * 能力1
	 */
	private String ability1;
	
	/**
	 * 能力2
	 */
	private String ability2;
	
	/**
	 * 詳細
	 */
	private String detail;

}
